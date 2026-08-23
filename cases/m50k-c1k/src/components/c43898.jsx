import React from 'react';
const LABEL_43898 = 'component_43898';
export function Component43898({ value = 43898, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43898, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43898, 'data-value': derived.doubled }, children);
}
export default Component43898;
