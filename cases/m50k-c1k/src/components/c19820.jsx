import React from 'react';
const LABEL_19820 = 'component_19820';
export function Component19820({ value = 19820, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19820, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19820, 'data-value': derived.doubled }, children);
}
export default Component19820;
