import React from 'react';
const LABEL_19770 = 'component_19770';
export function Component19770({ value = 19770, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19770, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19770, 'data-value': derived.doubled }, children);
}
export default Component19770;
