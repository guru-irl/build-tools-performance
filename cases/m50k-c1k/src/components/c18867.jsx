import React from 'react';
const LABEL_18867 = 'component_18867';
export function Component18867({ value = 18867, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18867, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18867, 'data-value': derived.doubled }, children);
}
export default Component18867;
