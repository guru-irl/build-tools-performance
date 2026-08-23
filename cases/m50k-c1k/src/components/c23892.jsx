import React from 'react';
const LABEL_23892 = 'component_23892';
export function Component23892({ value = 23892, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23892, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23892, 'data-value': derived.doubled }, children);
}
export default Component23892;
