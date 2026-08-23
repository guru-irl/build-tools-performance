import React from 'react';
const LABEL_34508 = 'component_34508';
export function Component34508({ value = 34508, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34508, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34508, 'data-value': derived.doubled }, children);
}
export default Component34508;
