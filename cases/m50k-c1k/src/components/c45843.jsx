import React from 'react';
const LABEL_45843 = 'component_45843';
export function Component45843({ value = 45843, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45843, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45843, 'data-value': derived.doubled }, children);
}
export default Component45843;
