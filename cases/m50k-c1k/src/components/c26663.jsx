import React from 'react';
const LABEL_26663 = 'component_26663';
export function Component26663({ value = 26663, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26663, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26663, 'data-value': derived.doubled }, children);
}
export default Component26663;
