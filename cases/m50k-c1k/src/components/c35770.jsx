import React from 'react';
const LABEL_35770 = 'component_35770';
export function Component35770({ value = 35770, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35770, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35770, 'data-value': derived.doubled }, children);
}
export default Component35770;
