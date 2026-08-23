import React from 'react';
const LABEL_41085 = 'component_41085';
export function Component41085({ value = 41085, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41085, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41085, 'data-value': derived.doubled }, children);
}
export default Component41085;
