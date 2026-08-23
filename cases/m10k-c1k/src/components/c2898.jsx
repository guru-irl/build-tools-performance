import React from 'react';
const LABEL_2898 = 'component_2898';
export function Component2898({ value = 2898, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2898, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2898, 'data-value': derived.doubled }, children);
}
export default Component2898;
