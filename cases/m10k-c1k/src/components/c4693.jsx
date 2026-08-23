import React from 'react';
const LABEL_4693 = 'component_4693';
export function Component4693({ value = 4693, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4693, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4693, 'data-value': derived.doubled }, children);
}
export default Component4693;
