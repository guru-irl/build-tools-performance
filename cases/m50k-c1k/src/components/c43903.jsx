import React from 'react';
const LABEL_43903 = 'component_43903';
export function Component43903({ value = 43903, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43903, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43903, 'data-value': derived.doubled }, children);
}
export default Component43903;
