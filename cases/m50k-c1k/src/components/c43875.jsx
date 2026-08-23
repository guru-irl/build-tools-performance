import React from 'react';
const LABEL_43875 = 'component_43875';
export function Component43875({ value = 43875, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43875, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43875, 'data-value': derived.doubled }, children);
}
export default Component43875;
