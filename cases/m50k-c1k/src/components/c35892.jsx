import React from 'react';
const LABEL_35892 = 'component_35892';
export function Component35892({ value = 35892, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35892, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35892, 'data-value': derived.doubled }, children);
}
export default Component35892;
