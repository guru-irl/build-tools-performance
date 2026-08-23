import React from 'react';
const LABEL_44960 = 'component_44960';
export function Component44960({ value = 44960, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44960, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44960, 'data-value': derived.doubled }, children);
}
export default Component44960;
