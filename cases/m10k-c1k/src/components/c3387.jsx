import React from 'react';
const LABEL_3387 = 'component_3387';
export function Component3387({ value = 3387, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3387, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3387, 'data-value': derived.doubled }, children);
}
export default Component3387;
