import React from 'react';
const LABEL_41704 = 'component_41704';
export function Component41704({ value = 41704, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41704, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41704, 'data-value': derived.doubled }, children);
}
export default Component41704;
