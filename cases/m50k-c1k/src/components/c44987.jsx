import React from 'react';
const LABEL_44987 = 'component_44987';
export function Component44987({ value = 44987, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44987, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44987, 'data-value': derived.doubled }, children);
}
export default Component44987;
