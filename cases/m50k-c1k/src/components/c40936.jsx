import React from 'react';
const LABEL_40936 = 'component_40936';
export function Component40936({ value = 40936, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40936, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40936, 'data-value': derived.doubled }, children);
}
export default Component40936;
