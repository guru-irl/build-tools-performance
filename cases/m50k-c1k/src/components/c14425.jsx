import React from 'react';
const LABEL_14425 = 'component_14425';
export function Component14425({ value = 14425, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14425, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14425, 'data-value': derived.doubled }, children);
}
export default Component14425;
