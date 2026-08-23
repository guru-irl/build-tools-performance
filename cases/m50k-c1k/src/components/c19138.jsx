import React from 'react';
const LABEL_19138 = 'component_19138';
export function Component19138({ value = 19138, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19138, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19138, 'data-value': derived.doubled }, children);
}
export default Component19138;
