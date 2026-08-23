import React from 'react';
const LABEL_38543 = 'component_38543';
export function Component38543({ value = 38543, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38543, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38543, 'data-value': derived.doubled }, children);
}
export default Component38543;
