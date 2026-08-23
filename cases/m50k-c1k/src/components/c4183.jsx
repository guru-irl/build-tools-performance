import React from 'react';
const LABEL_4183 = 'component_4183';
export function Component4183({ value = 4183, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4183, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4183, 'data-value': derived.doubled }, children);
}
export default Component4183;
