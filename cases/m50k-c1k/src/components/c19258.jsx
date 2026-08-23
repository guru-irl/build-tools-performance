import React from 'react';
const LABEL_19258 = 'component_19258';
export function Component19258({ value = 19258, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19258, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19258, 'data-value': derived.doubled }, children);
}
export default Component19258;
