import React from 'react';
const LABEL_19563 = 'component_19563';
export function Component19563({ value = 19563, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19563, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19563, 'data-value': derived.doubled }, children);
}
export default Component19563;
