import React from 'react';
const LABEL_32820 = 'component_32820';
export function Component32820({ value = 32820, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32820, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32820, 'data-value': derived.doubled }, children);
}
export default Component32820;
