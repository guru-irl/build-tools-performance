import React from 'react';
const LABEL_43571 = 'component_43571';
export function Component43571({ value = 43571, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43571, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43571, 'data-value': derived.doubled }, children);
}
export default Component43571;
