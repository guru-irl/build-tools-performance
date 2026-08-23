import React from 'react';
const LABEL_863 = 'component_863';
export function Component863({ value = 863, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_863, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_863, 'data-value': derived.doubled }, children);
}
export default Component863;
