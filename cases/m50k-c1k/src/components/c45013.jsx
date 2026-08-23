import React from 'react';
const LABEL_45013 = 'component_45013';
export function Component45013({ value = 45013, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45013, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45013, 'data-value': derived.doubled }, children);
}
export default Component45013;
