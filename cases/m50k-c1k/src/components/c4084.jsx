import React from 'react';
const LABEL_4084 = 'component_4084';
export function Component4084({ value = 4084, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4084, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4084, 'data-value': derived.doubled }, children);
}
export default Component4084;
