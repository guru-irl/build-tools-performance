import React from 'react';
const LABEL_43555 = 'component_43555';
export function Component43555({ value = 43555, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43555, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43555, 'data-value': derived.doubled }, children);
}
export default Component43555;
