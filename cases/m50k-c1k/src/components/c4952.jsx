import React from 'react';
const LABEL_4952 = 'component_4952';
export function Component4952({ value = 4952, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4952, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4952, 'data-value': derived.doubled }, children);
}
export default Component4952;
