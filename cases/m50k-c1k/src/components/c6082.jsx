import React from 'react';
const LABEL_6082 = 'component_6082';
export function Component6082({ value = 6082, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6082, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6082, 'data-value': derived.doubled }, children);
}
export default Component6082;
