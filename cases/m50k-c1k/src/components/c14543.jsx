import React from 'react';
const LABEL_14543 = 'component_14543';
export function Component14543({ value = 14543, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14543, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14543, 'data-value': derived.doubled }, children);
}
export default Component14543;
