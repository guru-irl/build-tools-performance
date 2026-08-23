import React from 'react';
const LABEL_34078 = 'component_34078';
export function Component34078({ value = 34078, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34078, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34078, 'data-value': derived.doubled }, children);
}
export default Component34078;
