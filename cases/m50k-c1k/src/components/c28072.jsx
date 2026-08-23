import React from 'react';
const LABEL_28072 = 'component_28072';
export function Component28072({ value = 28072, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28072, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28072, 'data-value': derived.doubled }, children);
}
export default Component28072;
