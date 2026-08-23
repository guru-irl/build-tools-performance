import React from 'react';
const LABEL_19272 = 'component_19272';
export function Component19272({ value = 19272, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19272, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19272, 'data-value': derived.doubled }, children);
}
export default Component19272;
