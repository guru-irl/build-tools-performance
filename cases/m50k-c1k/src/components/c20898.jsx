import React from 'react';
const LABEL_20898 = 'component_20898';
export function Component20898({ value = 20898, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20898, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20898, 'data-value': derived.doubled }, children);
}
export default Component20898;
