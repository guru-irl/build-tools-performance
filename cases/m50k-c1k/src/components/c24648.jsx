import React from 'react';
const LABEL_24648 = 'component_24648';
export function Component24648({ value = 24648, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24648, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24648, 'data-value': derived.doubled }, children);
}
export default Component24648;
