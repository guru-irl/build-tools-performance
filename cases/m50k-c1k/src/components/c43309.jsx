import React from 'react';
const LABEL_43309 = 'component_43309';
export function Component43309({ value = 43309, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43309, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43309, 'data-value': derived.doubled }, children);
}
export default Component43309;
