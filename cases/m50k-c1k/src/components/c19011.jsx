import React from 'react';
const LABEL_19011 = 'component_19011';
export function Component19011({ value = 19011, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19011, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19011, 'data-value': derived.doubled }, children);
}
export default Component19011;
