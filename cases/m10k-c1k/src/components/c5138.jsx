import React from 'react';
const LABEL_5138 = 'component_5138';
export function Component5138({ value = 5138, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5138, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5138, 'data-value': derived.doubled }, children);
}
export default Component5138;
