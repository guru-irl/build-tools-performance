import React from 'react';
const LABEL_18892 = 'component_18892';
export function Component18892({ value = 18892, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18892, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18892, 'data-value': derived.doubled }, children);
}
export default Component18892;
