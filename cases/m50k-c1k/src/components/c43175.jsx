import React from 'react';
const LABEL_43175 = 'component_43175';
export function Component43175({ value = 43175, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43175, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43175, 'data-value': derived.doubled }, children);
}
export default Component43175;
