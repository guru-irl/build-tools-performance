import React from 'react';
const LABEL_38892 = 'component_38892';
export function Component38892({ value = 38892, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38892, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38892, 'data-value': derived.doubled }, children);
}
export default Component38892;
