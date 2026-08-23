import React from 'react';
const LABEL_14215 = 'component_14215';
export function Component14215({ value = 14215, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14215, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14215, 'data-value': derived.doubled }, children);
}
export default Component14215;
