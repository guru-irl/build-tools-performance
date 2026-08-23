import React from 'react';
const LABEL_42420 = 'component_42420';
export function Component42420({ value = 42420, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42420, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42420, 'data-value': derived.doubled }, children);
}
export default Component42420;
