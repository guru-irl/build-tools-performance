import React from 'react';
const LABEL_40960 = 'component_40960';
export function Component40960({ value = 40960, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40960, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40960, 'data-value': derived.doubled }, children);
}
export default Component40960;
