import React from 'react';
const LABEL_19366 = 'component_19366';
export function Component19366({ value = 19366, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19366, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19366, 'data-value': derived.doubled }, children);
}
export default Component19366;
