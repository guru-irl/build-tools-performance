import React from 'react';
const LABEL_40598 = 'component_40598';
export function Component40598({ value = 40598, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40598, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40598, 'data-value': derived.doubled }, children);
}
export default Component40598;
