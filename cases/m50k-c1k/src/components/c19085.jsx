import React from 'react';
const LABEL_19085 = 'component_19085';
export function Component19085({ value = 19085, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19085, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19085, 'data-value': derived.doubled }, children);
}
export default Component19085;
