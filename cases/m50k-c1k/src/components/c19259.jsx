import React from 'react';
const LABEL_19259 = 'component_19259';
export function Component19259({ value = 19259, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19259, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19259, 'data-value': derived.doubled }, children);
}
export default Component19259;
