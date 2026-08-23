import React from 'react';
const LABEL_44317 = 'component_44317';
export function Component44317({ value = 44317, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44317, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44317, 'data-value': derived.doubled }, children);
}
export default Component44317;
