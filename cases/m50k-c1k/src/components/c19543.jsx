import React from 'react';
const LABEL_19543 = 'component_19543';
export function Component19543({ value = 19543, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19543, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19543, 'data-value': derived.doubled }, children);
}
export default Component19543;
