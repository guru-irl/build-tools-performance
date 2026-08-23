import React from 'react';
const LABEL_19686 = 'component_19686';
export function Component19686({ value = 19686, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19686, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19686, 'data-value': derived.doubled }, children);
}
export default Component19686;
