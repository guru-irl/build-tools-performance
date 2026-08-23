import React from 'react';
const LABEL_25138 = 'component_25138';
export function Component25138({ value = 25138, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25138, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25138, 'data-value': derived.doubled }, children);
}
export default Component25138;
